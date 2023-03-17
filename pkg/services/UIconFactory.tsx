import { CreatedFactoryIcon, IFactoryIcon } from "../models/FactoryIcon"

type IconFactoryInstance = {
    test : string, 
    setIcon : (name :string, icon : IFactoryIcon) => void
    getIcon : (name : string) => CreatedFactoryIcon|undefined
}

const _IconFactory = function(){
    
    const SingletonIconFactory = function() : IconFactoryInstance{
        const registeredIcons : Map<string, CreatedFactoryIcon> = new Map()
        return {
            test : "test",
            setIcon: (name :string, icon : IFactoryIcon) =>{
                registeredIcons.set(name, {...icon, jsx : (<img src={`${icon.assetPath}${icon.sprite ? "#" + icon.sprite : ''}`}/>)})
            },
            getIcon : (name) => {
                return registeredIcons.get(name)
            },
            
        }
    }

    var instance : IconFactoryInstance;
    function getInstance () {
        if (instance == undefined) {
            instance = SingletonIconFactory();
        }
        return instance
    }
    return {
        
        registerIcon : function(name : string, icon : IFactoryIcon){
            getInstance().setIcon(name, icon)
        },
        getIcon : (name :string) => {
            return getInstance().getIcon(name)
        }
    }
}

export const IconFactory =  _IconFactory()