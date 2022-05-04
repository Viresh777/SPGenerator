require('dotenv').config();
const Jimp = require('jimp');
const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('', '');
const Traits = require('./traits');
let femaleHairTrait = '';
let femaleHairJimp = '';
let femaleOutfitTrait = '';
let femaleOutfitJimp = '';
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const build = async(index, onComplete) => {
    const _path = '/Users/Viresh/Documents/medium-tutorial-nft-generation';
    var _traits = [];

    //BACKGROUND
    const background = Traits.getBackground();
    const backgroundJimp = await Jimp.read(_path+'/Traits/Background/'+background+'.png');
    _traits.push({
        'trait_type': 'Background',
        'value': background
    });

    var _composedImage = backgroundJimp;

     //TYPE
    const bodyType = Traits.getBodyType();
    const bodyJimp = await Jimp.read(_path+'/Traits/Types/'+bodyType+'.png');
    _traits.push({
        'trait_type': 'Body',
        'value': bodyType
    });

    _composedImage.blit(bodyJimp, 0, 0);


    //HAIR
    if(bodyType.indexOf('Male') > -1){
        const hair = Traits.getMaleHair();
        const hairJimp = await Jimp.read(_path+'/Traits/Male/4 Hair/'+hair+'.png');
        _traits.push({
            'trait_type': 'Hair',
            'value': hair
        });
        _composedImage.blit(hairJimp, 0, 0);
    }


    if(bodyType.indexOf('Female') > -1){
        const outfit = Traits.getFemaleOutfit();
        const outfitJimp = await Jimp.read(_path+'/Traits/Female/2 Clothes/'+outfit+'.png');

        femaleOutfitJimp = outfitJimp
        femaleOutfitTrait = outfit;
        // //REMOVE HAIR OF FEMALE IF HOOD OUTFIT IS ON
        // if(outfit.indexOf('Hoodie') > -1){
        //     //do nothing
        // }
        // else{
        //     _traits.push({
        //         'trait_type': 'Outfit',
        //         'value': outfit
        //     });
        //     _composedImage.blit(outfitJimp, 0, 0);
        // }
    }

    if(bodyType.indexOf('Female') > -1){
        const hair = Traits.getFemaleHair();
        const hairJimp = await Jimp.read(_path+'/Traits/Female/4 Hair/'+hair+'.png');
        femaleHairJimp = hairJimp
        femaleHairTrait = hair;
        if(femaleOutfitTrait.indexOf('Hoodie') > -1){
            console.log('here');
            _traits.push({
                'trait_type': 'Outfit',
                'value': femaleOutfitTrait
            });
            _composedImage.blit(femaleOutfitJimp, 0, 0);
        }
        else{
            _traits.push({
                'trait_type': 'Outfit',
                'value': femaleOutfitTrait
            });
            _traits.push({
                'trait_type': 'Hair',
                'value': hair
            });
            _composedImage.blit(hairJimp, 0, 0);
            _composedImage.blit(femaleOutfitJimp, 0, 0);
        }

    }


    //ACCESSORIES
    if(bodyType.indexOf('Male') > -1){
        const accessories = Traits.getMaleAccessories();
        const accessoriesJimp = await Jimp.read(_path+'/Traits/Male/3 Accessories/'+accessories+'.png');
        _traits.push({
            'trait_type': 'Accessories',
            'value': accessories
        });
        _composedImage.blit(accessoriesJimp, 0, 0);
    }
    if(bodyType.indexOf('Female') > -1){
        const accessories = Traits.getFemaleAccessories();
        const accessoriesJimp = await Jimp.read(_path+'/Traits/Female/3 Accessories/'+accessories+'.png');
        _traits.push({
            'trait_type': 'Accessories',
            'value': accessories
        });
        _composedImage.blit(accessoriesJimp, 0, 0);
    }

    //OUTFITS
    if(bodyType.indexOf('Male') > -1){
        const outfit = Traits.getMaleOutfit();
        const outfitJimp = await Jimp.read(_path+'/Traits/Male/2 Clothes/'+outfit+'.png');
        _traits.push({
            'trait_type': 'Outfit',
            'value': outfit
        });
        _composedImage.blit(outfitJimp, 0, 0);
    }

    //WEAPONS
    if(bodyType.indexOf('Male 1') > -1){
        const weapon = Traits.getMaleWeapon1();
        const weaponJimp = await Jimp.read(_path+'/Traits/Male/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Male 2') > -1){
        const weapon = Traits.getMaleWeapon2();
        const weaponJimp = await Jimp.read(_path+'/Traits/Male/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Male 3') > -1){
        const weapon = Traits.getMaleWeapon3();
        const weaponJimp = await Jimp.read(_path+'/Traits/Male/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Male 4') > -1){
        const weapon = Traits.getMaleWeapon4();
        const weaponJimp = await Jimp.read(_path+'/Traits/Male/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }

    if(bodyType.indexOf('Female 1') > -1){
        const weapon = Traits.getFemaleWeapon1();
        const weaponJimp = await Jimp.read(_path+'/Traits/Female/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Female 2') > -1){
        const weapon = Traits.getFemaleWeapon2();
        const weaponJimp = await Jimp.read(_path+'/Traits/Female/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Female 3') > -1){
        const weapon = Traits.getFemaleWeapon3();
        const weaponJimp = await Jimp.read(_path+'/Traits/Female/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }
    if(bodyType.indexOf('Female 4') > -1){
        const weapon = Traits.getFemaleWeapon4();
        const weaponJimp = await Jimp.read(_path+'/Traits/Female/1 Weapons/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }

    if(bodyType.indexOf('Bounty Hunter') > -1){
        const weapon = Traits.getBountyHunterWeapon();
        const weaponJimp = await Jimp.read(_path+'/Traits/BountyHunter/'+weapon+'.png');
        _traits.push({
            'trait_type': 'Weapon',
            'value': weapon
        });
        _composedImage.blit(weaponJimp, 0, 0);
    }

    await _composedImage.write('Output/images/'+index+'.png');
    await sleep(20); //We give some time for the image to be actually saved in our files
    const _readableStream = await fs.createReadStream(_path + '/Output/images/'+index+'.png');
    //const _ipfs = await pinata.pinFileToIPFS(_readableStream);

    await fs.writeFileSync('Output/'+index+'.json', JSON.stringify({
        "name": "Star Punk #"+index,
        "description": "The Star Punks Collection",
        "image": "ipfs://QmWJByxiszQr7JX5t9634ksgqPEhigSCqt2xrGG6ei59Xh/"+index+'.png',
        "edition": index,
        "date": Date.now(),
        "attributes": _traits,
        "compiler": "Star Punks Compiler",
    }))

    onComplete();
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

module.exports = {
    build
}