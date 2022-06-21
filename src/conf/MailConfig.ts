import { conf, lib } from "@deepeshgupta/noddy";

const debug = new lib.log.Logger({ moduleName: "app:conf:mail" });

const run = () => {
    debug.debug("Mail Configurations", conf.MailConfig.get());
};

export default run;
