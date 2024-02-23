import { UseCaseError } from "@/core/errors/use-casa-error";

export class ResourceNotFoundError extends Error implements UseCaseError {
    constructor() {
        super('Resource not found')
    }
}