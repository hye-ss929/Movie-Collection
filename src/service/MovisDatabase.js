import firebaseApp from "./firebase";

class MoviesDatabase {
  saveMovie(userId, movie) {
    firebaseApp.database().ref(`${userId}/movies/${movie.id}`).set(movie);
  }

  snapshotMovie(userId, onUpdate) {
    firebaseApp
      .database()
      .ref(`${userId}/movies`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        data && onUpdate(data);
      });
  }

  removeMovie(userId, movie) {
    firebaseApp.database().ref(`${userId}/movies/${movie.id}`).remove();
  }
}

export default MoviesDatabase;
