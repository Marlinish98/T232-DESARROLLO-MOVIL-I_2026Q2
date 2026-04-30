import { Data } from "../models/Data";

export const calculateExercises = (
  dailyHours: number[],
  target: number
): Data => {

  const periodLength = dailyHours.length;

  const trainingDays = dailyHours.filter(day => day > 0).length;

  const totalHours = dailyHours.reduce((sum, day) => sum + day, 0);

  const average = totalHours / periodLength;

  const success = average >= target;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Excelente, eres el mejor!!";
  } else if (average >= target * 0.7) {
    rating = 2;
    ratingDescription = "Vamos!!, puedes mejorar";
  } else {
    rating = 1;
    ratingDescription = "Intentalo mejor a la proxima";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};