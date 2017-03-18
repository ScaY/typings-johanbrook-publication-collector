interface PublicationCollector_Static {
    new (context: Object): PublicationCollector_Instance;
}

interface PublicationCollector_Instance {
    collect(name: String, ...args: any[]): any;
    _publishHandlerResult(res: Object): any;
    added(collection: Object, id: String, fields: Object): any;
    changed(collection: Object, id: string, fields: Object): any;
    removed(collection: Object, id: string): any;
}

declare const PublicationCollector: PublicationCollector_Static;

declare module "meteor/johanbrook:publication-collector" {
    export const PublicationCollector: PublicationCollector_Static;
    type PublicationCollector = PublicationCollector_Instance;
}
