import config from '../env';

const {BACKEND_URL} = config;
class ResourceInventory{
    static resourceInventoryInstance;
    inventory =[];
    subscribersList={};
    constructor() {
      if (!ResourceInventory.resourceInventoryInstance) {
        return this.initialize();
      } else {
        return ResourceInventory.resourceInventoryInstance;
      }
    }
  
    initialize() {
        this.fetchEnrollmentList();
        ResourceInventory.resourceInventoryInstance = this;
        return ResourceInventory.resourceInventoryInstance;
    }
  
   
  
   
  
 
    

    isInventoryEmpty(){
        return this.inventory.length === 0;
    }
  

    fetchResourceList(){
        fetch(`${BACKEND_URL}/resources`).then(res =>{

            console.log("[Tanawy is testing fetching resources response ]",res);
            this.notifySubscribers("resources Data Received");

        }).catch(e=>{

            console.error("[Error while fetching resources]", e);
        })

    }


    subscribeToUpdates(callback, identifier){

        this.subscribersList[identifier] = callback;

    }

    unsubscribeToUpdates(identifier){
        delete this.subscribersList[identifier];
    }

    notifySubscribers(message){
        let subscribers = Object.keys(this.subscribersList);

        subscribers.forEach(subscriber=>{

            let callback = this.subscribersList[subscribers];
            try{

                callback();
            }catch(e){
                console.error("[Error while notifying subscribers]", e);
            }
        })

    }
  
    
   
  }
  
  const instance = new ResourceInventory();
   
  export default instance;
  
  