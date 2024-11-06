/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

import letThereBeLight      from '/evolux.universe';

(async () => {
    console.log("** letThereBeLight");
    try {
        const universe = await letThereBeLight();
        thoregon.checkpoint("§§ start delta");
        console.log("** universe inflated");
    } catch (err) {
        console.log("$$ letThereBeLight ERROR");
        console.log(err);
    }
})();
