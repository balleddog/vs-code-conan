
import { SettingsParser } from "./settings-parser";
import { Profile } from "./profile";
export class Configurator {
    private file : string;
    private profiles: Map<string,Profile>;

    constructor(file : string) {
        this.file = file;
        this.profiles = new Map<string,Profile>();
    }

    readFile(){
        let fs = require('fs');
        let data = fs.readFileSync(this.file);
        let obj = new SettingsParser(data);
        this.profiles = obj.convert();
    }

    getConanFile(name : string): string{
        let conanFile = this.profiles.get(name)?.getConanFile();
        if(!conanFile){
            throw new Error("No Profile found"); 
        }
        return conanFile;
    }

    getAllProfileNames():string[]{
        return Array.from(this.profiles.keys());
    }

    getProfile(name : string):string{
        let profile = this.profiles.get(name)?.getProfile();
        if(!profile){
            throw new Error("No Profile found"); 
        }
        return profile;
    }

    getBuildFolder(name : string):string{
        let buildfolder = this.profiles.get(name)?.getBuildFolder();
        if(!buildfolder){
            throw new Error("No build folder found"); 
        }
        return buildfolder;
    }

    getInstallArg(name : string):string{
        let installArg = this.profiles.get(name)?.getInstallArguments();
        if(!installArg){
            throw new Error("No installArg found"); 
        }
        return installArg;
    }

    getBuildArg(name : string):string{
        let buildArg = this.profiles.get(name)?.getBuildArguments();
        if(!buildArg){
            throw new Error("No buildArg found"); 
        }
        return buildArg;
    }

    getCreateArg(name : string):string{
        let createArg = this.profiles.get(name)?.getCreateArguments();
        if(!createArg){
            throw new Error("No createArg found"); 
        }
        return createArg;
    }

    getCreateUser(name : string):string{
        let createUser = this.profiles.get(name)?.getCreateUser();
        if(!createUser){
            throw new Error("No createUser found"); 
        }
        return createUser;
    }

    getCreateChannel(name : string):string{
        let createChannel = this.profiles.get(name)?.getCreateChannel();
        if(!createChannel){
            throw new Error("No createChannel found"); 
        }
        return createChannel;
    }
}