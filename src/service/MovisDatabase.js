import { firebaseDatabase } from "./firebase";

class MoviesDatabase {
  saveMovie(userId, movie) {
    firebaseDatabase.ref(`${userId}/movies/${movie.id}`).set(movie);
  }

  snapshotMovie(userId, onUpdate) {
    firebaseDatabase.ref(`${userId}/movies`).on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
  }

  removeMovie(userId, movie) {
    firebaseDatabase.ref(`${userId}/movies/${movie.id}`).remove();
  }
}

export default MoviesDatabase;
