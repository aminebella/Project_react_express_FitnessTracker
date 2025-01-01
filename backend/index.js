const express = require("express"); // Framework de Node.js pour créer des API REST.
const bodyParser = require("body-parser"); //Middleware pour analyser les données JSON envoyées dans les requêtes POST ou PUT.
const cors = require("cors");//Middleware pour permettre des requêtes Cross-Origin (important si le frontend et le backend sont sur des ports ou domaines différents).
const fs = require("fs"); //Permet de lire et écrire des fichiers, utilisé ici pour gérer le fichier workouts.json.
const app = express();

app.use(cors());
app.use(bodyParser.json());

const filePath = "./workouts.json";

// Initialiser le fichier JSON s'il n'existe pas
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({}));
}

// Lire les données du fichier JSON
const readData = () => JSON.parse(fs.readFileSync(filePath, "utf8"));

// Sauvegarder les données dans le fichier JSON : Écrit les données dans le fichier JSON.
const writeData = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// Récupérer les workouts d'une date spécifique
app.get("/workouts/:date", (req, res) => {
  const date = req.params.date; // Récupère la date passée dans l'URL.
  const data = readData();// Lit les données du fichier JSON.
  res.json(data[date] || []); // Renvoie les workouts de cette date ou un tableau vide.
});

// Ajouter un workout pour une date spécifique
app.post("/workouts/:date", (req, res) => {
  const date = req.params.date;// Récupère la date de l'URL.
  const workout = req.body; // Récupère les données du workout envoyées dans le corps de la requête.
  const data = readData(); // Lit les données existantes.

  if (!workout) {
    return res.status(400).json({ error: 'Workout data is missing' });
  }

  if (!data[date]) data[date] = []; // Initialise un tableau pour cette date si elle n'existe pas.
  data[date].push(workout); // Ajoute le nouveau workout au tableau correspondant à la date.

  writeData(data); // Sauvegarde les données mises à jour dans le fichier JSON.
  res.json({ message: "Workout ajouté avec succès !" }); // Envoie un message de confirmation.
});

// Modifier un workout pour une date spécifique
app.put("/workouts/:date/:index", (req, res) => {
  const { date, index } = req.params;
  const updatedWorkout = req.body;
  const data = readData();

  if (data[date] && data[date][index]) {
    data[date][index] = updatedWorkout;
    writeData(data);
    res.json({ message: "Workout modifié avec succès !" });
  } else {
    res.status(404).json({ message: "Workout non trouvé !" });
  }
});

// Supprimer un workout d'une date spécifique
app.delete("/workouts/:date/:index", (req, res) => {
  const { date, index } = req.params;
  const data = readData();

  if (data[date] && data[date][index]) {
    data[date].splice(index, 1);
    if (data[date].length === 0) delete data[date]; // Supprime la date si elle ne contient plus de workouts.
    writeData(data);
    res.json({ message: "Workout supprimé avec succès !" });
  } else {
    res.status(404).json({ message: "Workout non trouvé !" });
  }
});


// Lancer le serveur
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
  console.log("hi")
});
