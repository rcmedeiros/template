// tslint:disable: no-unsafe-any no-implicit-dependencies
import e, { NextFunction, Request, Response, Router } from 'express';
import * as core from 'express-serve-static-core';
import figlet from 'figlet';
import fs from 'fs';
import * as http from 'http';
import path from 'path';

interface ModuleInfo {
    name: string;
    version: string;
    description: string;
}

interface Closable {
    close(callback?: Function): this;
}

export class DummyServer {
    private readonly LIST: Array<string> = ['Green Tea', 'Himalaya Darjeeling', 'Earl Grey tea'];
    private readonly app: core.Express;
    private readonly moduleInfo: ModuleInfo;
    private server: http.Server;

    constructor() {
        this.app = e();

        this.app.use('/coffee', (request: Request, response: Response) => {
            response.sendStatus(418);
        });
        this.app.use('/tea', (request: Request, response: Response) => {
            const t: string = request.query ? request.query.t : request.body ? request.body.t : undefined;
            if (!(t)) {
                response.send('Which one?');
            } else if (!this.LIST.includes(t)) {
                response.send(`${t} unavailable. Try another.`);
            } else {
                response.json({ tea: t });
            }
        });
        this.app.use('/', (request: Request, response: Response) => {
            response.json(this.LIST);
        });
        this.app.use('*', (_request: Request, response: Response) => {
            response.sendStatus(404);
        });

        this.moduleInfo = this.getModuleInfo();

    }

    private getModuleInfo(): ModuleInfo {
        let filename: string = 'package.json';

        while (!fs.existsSync(path.join(__dirname, filename))) {
            filename = '../' + filename;
        }

        const packageJson: Buffer = fs.readFileSync(path.join(__dirname, filename));
        const project: unknown = JSON.parse(packageJson.toString('utf-8'));

        return {
            name: (project as ModuleInfo).name,
            version: (project as ModuleInfo).version,
            description: (project as ModuleInfo).description,
        };
    }

    public async listen(): Promise<DummyServer> {
        return new Promise((resolve: Function, reject: Function): void => {
            this.server = this.app.listen(8080, () => {
                figlet.text('Dummy Online', {
                    font: 'Star Wars',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                }, (err: Error, data: string) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.info(`${data}\nv${this.moduleInfo.version}\n`);
                        resolve(this);
                    }
                });
            });
        });
    }

    public async close(): Promise<void> {
        return new Promise((resolve: Function, reject: Function): void => {
            this.server.close((err: Error) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}
