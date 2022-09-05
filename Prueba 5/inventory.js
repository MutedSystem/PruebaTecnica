function InvetoryList(){
    return {
        list: [],
        add:function (name) {
            if(this.list.length <= 10 && name.length != 0){
               let idExists = this.list.findIndex((_name)=> {return name === _name})
               if(idExists == -1){
                this.list.push(name)
               }
            }
        },
        remove: function(name){
            let id = this.list.findIndex((_name)=> {return name === _name})
            if(id!= -1){
                this.list.splice(id,1)
            }
        }
        ,
        getList: function(){
            return this.list
        }
    }
}

let invetoryList = InvetoryList()
invetoryList.add('lol')
console.log(invetoryList.getList())
invetoryList.remove('lol')
console.log(invetoryList.getList())
