import { conf, lib } from "@deepeshgupta/noddy";

const debug = new lib.log.Logger({ moduleName: "app:conf:mail" });

const run = () => {
  // conf.MailConfig.setAll({
  // service: process.env.MAIL_SERVICE ?? "",
  // host: process.env.MAIL_HOST ?? "",
  // port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587,
  // name: process.env.MAIL_NAME ?? "",
  // emailid: process.env.MAIL_EMAILID ?? "",
  // user: process.env.MAIL_USERNAME ?? "",
  // password: process.env.MAIL_PASSWORD ?? "",
  // });

  debug.debug("Mail Configurations", conf.MailConfig.get());
};

export default run;
