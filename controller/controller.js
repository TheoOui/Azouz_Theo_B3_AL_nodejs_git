import Post from "../models/post.js";


export const getParking = (req, res, next) => {
    console.log("Voiture");
    res.status(200).json({
        posts: [
            {
                modele: 'Peugeot',
                couleur: 'Rouge',
                annee: 2010
            }

        ]
    })

}

export const createVoiture = (req, res, next) => {
    console.log("Testtest");
    const modele = req.body.modele;
    const couleur = req.body.couleur;
    const annee = req.body.annee;
    const post = new Post({
        modele: modele,
        couleur: couleur,
        annee: annee,
    });
    post
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Post created successfully!',
                post: result
            });
        })
        .catch(err => {
            console.log(err);
        });

}