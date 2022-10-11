import { conf, lib } from "@deepeshgupta/noddy";

const debug = new lib.log.Logger({ moduleName: "app:conf:db", type: "log" });

const run = () => {
    // conf.DBConfig.setAll({
    //     mongodbUrl: process.env.MONGODB_AUTH_URL ?? '',
    // });

    debug.debug("Mail Configurations", conf.DBConfig.get());
};

export default run;
