import { conf } from "@deepeshgupta/noddy";

const run = () => {
  conf.AutoLoadConfig.update({
    mail: false,
    db: false,
  });
};

export default run;
