import { MisskeyClient } from "../Client/index.js";

export class Followback {
    private misskey: MisskeyClient;

    constructor(misskey: MisskeyClient) {
        this.misskey = misskey;
    }
}               
