import config from '../env';

const {BACKEND_URL} = config;
class AssignmentInventory{
    static assignmentInventoryInstance;
    inventory =[];
    subscribersList={};
    constructor() {
      if (!AssignmentInventory.assignmentInventoryInstance) {
        return this.initialize();
      } else {
        return AssignmentInventory.assignmentInventoryInstance;
      }
    }
  
    initialize() {
        this.fetchEnrollmentList();
        AssignmentInventory.assignmentInventoryInstance = this;
        return AssignmentInventory.assignmentInventoryInstance;
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
  
  const instance = new AssignmentInventory();
   
  export default instance;
  
  