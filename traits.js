const COMMON_MAX_RARITY = 50; //Starts from 1
const UNCOMMON_MAX_RARITY = 75;
const RARE_MAX_RARITY = 95;
const LEGENDARY_MAX_RARITY = 100;

const randomElement = (list) => {
    const _random = Math.floor(Math.random() * list.length);
    return list[_random];
}

const getBackground = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Green Planet', 'Blue Planet', 'Sun', 'Cave','Ice Planet', 'Mars Planet'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Ice Planet', 'Mars Planet','Hallway','Moon'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Hallway','Moon','Bridge'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Death Moon','Bridge'
        ]);
    }
}

const getBodyType = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Male 1','Male 2','Male 3','Male 4'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Female 1','Female 2','Female 3','Female 4'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Blue Bounty Hunter', 'White Bounty Hunter','Female 1','Female 2','Female 3','Female 4','Male 1','Male 2','Male 3','Male 4'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Silver Bounty Hunter','Green Bounty Hunter','Female 1','Female 2','Female 3','Female 4','Male 1','Male 2','Male 3','Male 4'
        ]);
    }
}

const getMaleWeapon1 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 1',  'LMG Blaster 1','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 1', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 1','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getMaleWeapon2 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);
    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 2',  'LMG Blaster 2','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 2', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 2','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getMaleWeapon3 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 3',  'LMG Blaster 3','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 3', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 3','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getMaleWeapon4 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 4',  'LMG Blaster 4','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 4', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 4','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getFemaleWeapon1 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 1',  'LMG Blaster 1','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 1', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 1','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getFemaleWeapon2 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 2',  'LMG Blaster 2','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 2', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 2','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getFemaleWeapon3 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);
    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 3',  'LMG Blaster 3','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 3', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 3','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}
const getFemaleWeapon4 = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster 4',  'LMG Blaster 4','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster 4', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster 4','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}

const getBountyHunterWeapon = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);
    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Blaster',  'LMG Blaster','Yellow Light Blade'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Rifle Blaster', 'Green Light Blade','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Scoped Blaster','Blue Light Blade', 'Purple Light Blade', 'Red Light Blade', 
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Cross Blade', 'Dark Blade',
        ]);
    }
}


const getMaleOutfit = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
            'Shirt',
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
           'Black Robe', 'White Robe'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Black Cloak', 'Brown Cloak',
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
             'Black Hoodie', 'Brown Hoodie'
        ]);
    }
}

const getFemaleOutfit = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
            'Shirt',
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
           'Black Robe', 'White Robe'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Black Cloak', 'Brown Cloak',
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
             'Black Hoodie', 'Brown Hoodie'
        ]);
    }
}


const getMaleAccessories = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Beard Black', 'Beard Blonde', 'Beard Brown', 'Beard Grey', 
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
             'Scar 1', 'Scar 2'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Black Mask','Brown Mask','White Mask'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
         'Red Cybernetic Eye','Green Cybernetic Eye','Green Visor', 'Red Visor'
        ]);
    }
}

const getFemaleAccessories = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Lip Stick', 
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
             'Scar',
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Black Mask', 'Brown Mask', 'White Mask'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
             'Green Cybernetic Eye', 'Green Visor', 'Red Cybernetic Eye', 'Red Visor', 
        ]);
    }
}


const getMaleHair = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Anakin Black', 'Anakin Blonde', 'Anakin Brown', 'Anakin Grey', 'Bald', 'Luke Black', 'Luke Blonde', 'Luke Brown', 'Luke Grey', 'QGJ Black', 'QGJ Blonde', 'QGJ Brown', 'QGJ Grey', 'Solo Black', 'Solo Blonde', 'Solo Brown', 'Solo Grey'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Anakin Black', 'Anakin Blonde', 'Anakin Brown', 'Anakin Grey', 'Bald', 'Luke Black', 'Luke Blonde', 'Luke Brown', 'Luke Grey', 'QGJ Black', 'QGJ Blonde', 'QGJ Brown', 'QGJ Grey', 'Solo Black', 'Solo Blonde', 'Solo Brown', 'Solo Grey'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Anakin Black', 'Anakin Blonde', 'Anakin Brown', 'Anakin Grey', 'Bald', 'Luke Black', 'Luke Blonde', 'Luke Brown', 'Luke Grey', 'QGJ Black', 'QGJ Blonde', 'QGJ Brown', 'QGJ Grey', 'Solo Black', 'Solo Blonde', 'Solo Brown', 'Solo Grey'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Anakin Black', 'Anakin Blonde', 'Anakin Brown', 'Anakin Grey', 'Bald', 'Luke Black', 'Luke Blonde', 'Luke Brown', 'Luke Grey', 'QGJ Black', 'QGJ Blonde', 'QGJ Brown', 'QGJ Grey', 'Solo Black', 'Solo Blonde', 'Solo Brown', 'Solo Grey'
        ]);
    }
}

const getFemaleHair = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
            'Leia Black', 'Leia Blonde', 'Leia Brown', 'Leia Grey', 'Long Black', 'Long Blonde', 'Long Brown', 'Long Grey', 'Rey Black', 'Rey Blonde', 'Rey Brown', 'Rey Grey', 'Short Black', 'Short Blonde', 'Short Brown', 'Short Grey'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Leia Black', 'Leia Blonde', 'Leia Brown', 'Leia Grey', 'Long Black', 'Long Blonde', 'Long Brown', 'Long Grey', 'Rey Black', 'Rey Blonde', 'Rey Brown', 'Rey Grey', 'Short Black', 'Short Blonde', 'Short Brown', 'Short Grey'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Leia Black', 'Leia Blonde', 'Leia Brown', 'Leia Grey', 'Long Black', 'Long Blonde', 'Long Brown', 'Long Grey', 'Rey Black', 'Rey Blonde', 'Rey Brown', 'Rey Grey', 'Short Black', 'Short Blonde', 'Short Brown', 'Short Grey'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Leia Black', 'Leia Blonde', 'Leia Brown', 'Leia Grey', 'Long Black', 'Long Blonde', 'Long Brown', 'Long Grey', 'Rey Black', 'Rey Blonde', 'Rey Brown', 'Rey Grey', 'Short Black', 'Short Blonde', 'Short Brown', 'Short Grey'
        ]);
    }
}



module.exports = {
    getBackground,
    getBodyType,
    getMaleWeapon1,
    getMaleWeapon2,
    getMaleWeapon3,
    getMaleWeapon4,
    getFemaleWeapon1,
    getFemaleWeapon2,
    getFemaleWeapon3,
    getFemaleWeapon4,
    getBountyHunterWeapon,
    getMaleOutfit,
    getFemaleOutfit,
    getMaleAccessories,
    getFemaleAccessories,
    getMaleHair,
    getFemaleHair
}