import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  // State untuk skor
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const maxScore = 10; // Skor maksimum untuk menang

  // Fungsi untuk menambah skor
  const incrementScore = (team) => {
    if (team === 'A' && scoreTeamA < maxScore) {
      setScoreTeamA(scoreTeamA + 1);
    } else if (team === 'B' && scoreTeamB < maxScore) {
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  // Fungsi untuk mengurangi skor
  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Tracker</Text>

      {/* Informasi Pertandingan */}
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team A</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => incrementScore('A')} />
            <Button title="-" onPress={() => decrementScore('A')} />
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team B</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => incrementScore('B')} />
            <Button title="-" onPress={() => decrementScore('B')} />
          </View>
        </View>
      </View>

      {/* Pesan Pemenang */}
      {(scoreTeamA === maxScore || scoreTeamB === maxScore) && (
        <Text style={styles.winner}>
          {scoreTeamA === maxScore ? 'Team A Wins!' : 'Team B Wins!'}
        </Text>
      )}

      {/* Tombol Reset */}
      <Button title="Reset Scores" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
});

export default App;
