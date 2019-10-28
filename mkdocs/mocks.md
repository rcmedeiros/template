# Mocks

## Sinon

Maybe your software integrates with other APIs, probably it connects to a database, and such resources won't/shouldn't be available for testing. For those situations, try [sinon.js](https://sinonjs.org/). There are lots of convenient ways to mock resources and all of those can be found in the documentation, but the one I use the most is replacing my http client request.

```Typescript
import needle from 'needle';
import sinon from 'sinon';
import { FakeNeedle } from './mocks/needle/fake-needle';

sinon.replace(needle, 'request', sinon.fake(new FakeNeedle().request));
```

In this example, I switched [needle](https://github.com/tomas/needle#readme)'s request function for a fake one of mine, that will be called unbeknownst to the code. This way I can control exactly what happens during tests with HTTP calls to other APIs.

```Typescript
export class FakeNeedle {
    private readonly baseRequest: unknown;
    constructor() {
        // This is a real request object that I stringified to a JSON
        this.baseRequest = JSON.parse(
            fs.readFileSync('test/mocks/needle/request.json').toString());
    }
    // This is the method that will be used instead of the real one
    public request = (method: NeedleHttpVerbs, url: string, data: BodyData, 
            _options?: NeedleOptions,
            callback?: NeedleCallback): ReadableStream => {

        // It looks for a file keyed by the URL and parameters received.
        const fileName: string = crypto.createHash('md5')
            .update(url + JSON.stringify(data)).digest('hex') + '.json';

        const filePath: string = path.join('test/mocks/needle', url, fileName);
        // If the file is not found, your test is broken
        if (!fs.existsSync(filePath)) {
            console.debug('method: ' + method);
            console.debug('call ' + url);
            console.debug('data ' + JSON.stringify(data));
            console.debug('path: ' + fileName);
            process.exit(0);
        } else {
            // Based on the URL and parameters, a preset response is returned
            const body: unknown = JSON.parse(fs.readFileSync(filePath).toString());

            const request: NeedleResponse = JSON.parse(
                JSON.stringify(this.baseRequest));
            request.body = body;

            callback(undefined, request, body);
        }
        return undefined;
    }
}
```

That it! Of course you can also give files a more intuitive name and choose them inside a switch statement, your call!
