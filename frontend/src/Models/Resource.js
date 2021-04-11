


export default class Resource {
    constructor(ResourceObj){
        let tempResourceObj = {
            "id": "1",
            "path": "/public/sample.pdf",
            "type": "book"
          };

        this.id     = tempResourceObj.id;
        this.path   = tempResourceObj.path;
        this.type   = tempResourceObj.type;

    }
}