import ShareNative from "./ShareNative";
import ShareWeb from "./ShareWeb";
import { isBrowser } from "../../modules/utils/platform";

const Share = isBrowser() ? ShareWeb : ShareNative;

export default Share;
