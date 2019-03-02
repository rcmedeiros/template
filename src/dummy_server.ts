import e, { NextFunction, Request, Response, Router } from 'express';
// tslint:disable-next-line:no-implicit-dependencies
import * as core from 'express-serve-static-core';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';

interface ModuleInfo {
    name: string;
    version: string;
    description: string;
}

export class DummyServer {
    private readonly app: core.Express;
    private moduleInfo: ModuleInfo;

    constructor() {
        this.app = e();

        this.app.use('/foobar', (_request: Request, response: Response, next: NextFunction) => {
            response.status(200).json({ hello: 'world' });
            next();
        });

        this.loadModuleInfo();

    }

    private loadModuleInfo(): void {
        let filename: string = 'package.json';

        while (!fs.existsSync(path.join(__dirname, filename))) {
            filename = '../' + filename;
        }

        const packageJson: Buffer = fs.readFileSync(filename);
        const project: unknown = JSON.parse(packageJson.toString('utf-8'));

        this.moduleInfo = {
            name: (project as ModuleInfo).name,
            version: (project as ModuleInfo).version,
            description: (project as ModuleInfo).description,
        };
    }

    public async listen(): Promise<void> {
        return new Promise((resolve: Function, reject: Function): void => {
            this.app.listen(this.app.get('port'), () => {
                figlet.text('Dummy Online', {
                    font: 'Star Wars',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                }, (err: Error, data: string) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.info(`${data}\nv${this.moduleInfo.version}\n`);
                        resolve();
                    }
                });
            });
        });
    }
}
