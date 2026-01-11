
export type SecurityRuleContext = {
    path: string;
    operation: 'get' | 'list' | 'create' | 'update' | 'delete';
    requestResourceData?: any;
};

export class FirestorePermissionError extends Error {
    public readonly context: SecurityRuleContext;
    public readonly timestamp: number;

    constructor(context: SecurityRuleContext) {
        const jsonContext = JSON.stringify(context, null, 2);

        const message = `FirestoreError: Missing or insufficient permissions: The following request was denied by Firestore Security Rules:\n${jsonContext}`;

        super(message);
        this.name = 'FirestorePermissionError';
        this.context = context;
        this.timestamp = Date.now();

        // This is to make the stack trace more useful
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FirestorePermissionError);
        }
    }
}
