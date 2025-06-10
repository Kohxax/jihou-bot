import * as Misskey from "misskey-js";

export class MisskeyClient {
    private client: Misskey.api.APIClient;

    constructor(origin: string, token: string) {
        this.client = new Misskey.api.APIClient({
            origin,
            credential: token,
        });
    }

    async postNote(text: String) {
        return this.client.request<'notes/create', any>('notes/create', { text })
    }
}