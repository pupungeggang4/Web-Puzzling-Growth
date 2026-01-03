class Img {
    static loadPair = []
}

class Aud {
    static loadPair = []
}

class AssetLoader {
    static numAsset = 0
    static numLoaded = 0

    static loadAssets(callback) {
        AssetLoader.numAsset = Img.loadPair.length + Aud.loadPair.length
        if (AssetLoader.numLoaded >= AssetLoader.numAsset) {
            callback()
        }
        for (let i = 0; i < Img.loadPair.length; i++) {
            let pair = Img.loadPair[i]
            let img = new Image()
            if (pair[2] === '') {
                Img[pair[0]] = img
            }
            img.src = pair[1]
            img.addEventListener('load', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= AssetLoader.numAsset) {
                    callback()
                }
            }, false)
            img.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= AssetLoader.numAsset) {
                    callback()
                }
            }, false)
        }
        for (let i = 0; i < Aud.loadPair.length; i++) {
            let pair = Aud.loadPair[i]
            let aud = new Image()
            if (pair[2] === '') {
                Aud[pair[0]] = aud
            }
            aud.src = pair[1]
            aud.addEventListener('canplaythrough', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= AssetLoader.numAsset) {
                    callback()
                }
            }, false)
            aud.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= AssetLoader.numAsset) {
                    callback()
                }
            }, false)
        }
    }
}
