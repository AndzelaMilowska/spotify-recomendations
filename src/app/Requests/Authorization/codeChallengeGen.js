import { Base64Encoder } from "./base64encode";
export class CodeChallengeGenerator {
    static async generateCodeChallenge(verifier) {
        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return Base64Encoder.base64encode(digest)
    }
}

