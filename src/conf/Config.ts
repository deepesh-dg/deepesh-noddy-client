import { conf, lib } from "@deepeshgupta/noddy";

const debug = new lib.log.Logger({
    moduleName: "app:conf:config",
    type: "log",
});

const run = () => {
    // conf.Config.setAll({
    // authKey: process.env.AUTH_KEY ?? "CleanTax",
    // authSalt: process.env.AUTH_SALT ?? "CleanTax",
    // cloudinary: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
    //     apiKey: Number(process.env.CLOUDINARY_API_KEY),
    //     apiSecret: process.env.CLOUDINARY_API_SECRET ?? '',
    //     primaryDir: process.env.CLOUDINARY_PRIMARY_DIR ?? '',
    // },
    // appUrl: process.env.APP_URL?.split(",") ?? [],
    // });

    debug.debug("Environment", conf.Config.get());

    /**
     * Configure CDN media - Coudinary
     */
    // cloudinary.config({
    //     cloud_name: Config.get("cloudinary.cloudName"),
    //     api_key: Config.get("cloudinary.apiKey"),
    //     api_secret: Config.get("cloudinary.apiSecre")
    // });
    // debug.debug("Cloudinary", cloudinary.config());
};

export default run;
