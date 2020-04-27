//订阅 观察者
class Observer{
     constructor(name,Dep,cb){
         this.Dep = Dep
         this.name = name
         this.cb = cb
         this.Dep.addObserver(this)
     }

     update(){
         var message = `${this.name}您好,您订阅的状态已经更新 他的值为${this.Dep.getState()}`
         console.log(message)
         this.cb(message)
     }


}
//发布 触发者
class Dep{
    constructor(){
        //观察者的集合
        this.Observers = [];
        //触发的状态 
        this.state = 0;
    }

    //获取状态
    getState(){
        return  this.state
    }
 
    //设置状态更新并通知所有观察者
    setState(state){
        this.state = state
        this.notify()
    }

    //通知所有观察者
    notify(){
        this.Observers.forEach(observer=>{observer.update()})
    }

    //添加订阅者
    addObserver(obj){
        this.Observers.push(obj)
    }


}