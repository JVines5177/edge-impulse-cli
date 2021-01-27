// tslint:disable: no-unsafe-any

// tslint:disable-next-line
const serialPort = require('serialport');
import { EventEmitter } from 'tsee';

// Don't open same port twice
let serialPorts: { [index: string]: { message: typeof serialPort } } = { };

interface SerialPortListItem {
    path: string;
    manufacturer: string;
    serialNumber: string;
    pnpId: string;
    locationId: string;
    vendorId: string;
    productId: string;
}

export class SerialConnector extends EventEmitter<{
    connected: () => void,
    data: (a: Buffer) => void,
    error: (e: any) => void,
    close: () => void
}> {
    static async list() {
        return (await serialPort.list()) as SerialPortListItem[];
    }

    private _connected: boolean;
    private _path: string;
    private _baudrate: number;
    private _serial: typeof serialPort;
    private _dataHandler: (a: Buffer) => void;

    constructor(path: string, baudrate: number) {
        super();

        this._path = path;
        this._baudrate = baudrate;
        this._dataHandler = (d: Buffer) => {
            this.emit('data', d);
        };
        this._connected = false;
    }

    getPath() {
        return this._path;
    }

    isConnected() {
        return this._connected;
    }

    async connect() {
        let alreadyConnected = false;

        if (serialPorts[this._path]) {
            alreadyConnected = true;
            this._serial = serialPorts[this._path];
        }
        else {
            this._serial = new serialPort(this._path, { baudRate: this._baudrate });
            serialPorts[this._path] = this._serial;

            this._serial.on('close', () => {
                this._serial = null;
                delete serialPorts[this._path];
                this._connected = false;
                this.emit('close');
            });
        }

        this._serial.on('data', this._dataHandler);

        if (alreadyConnected) {
            return;
        }

        // otherwise wait for either error or open event
        return new Promise<void>((resolve, reject) => {
            this._serial.once('error', (ex: any) => {
                this._serial = null;
                delete serialPorts[this._path];
                reject(ex);
            });
            this._serial.once('open', () => {
                this._connected = true;

                this.emit('connected');

                this._serial.on('error', (ex: any) => this.emit('error', ex));

                resolve();
            });
        });
    }

    async write(buffer: Buffer) {
        return new Promise<void>((res, rej) => {
            if (!this._serial) return rej('Serial is null');

            this._serial.write(buffer, (err: any) => {
                if (err) return rej(err);
                res();
            });
        });
    }

    async setBaudRate(baudRate: number) {
        await this._serial.update({
            baudRate: baudRate
        });
    }

    async disconnect() {
        this._serial.off('data', this._dataHandler);
        return true;
    }

    async getMACAddress() {
        let list = await SerialConnector.list();
        let l = list.find(j => j.path === this._path);
        return l ? l.serialNumber : null;
    }

    async hasSerial() {
        return !!this._serial;
    }
}
