import { UseCaseError } from "@/core/errors/use-casa-error";

export class NotAllowedError extends Error implements UseCaseError {
    constructor() {
        super('Not allowed')
    }
}