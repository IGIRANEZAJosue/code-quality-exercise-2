function calculateMatrixSum(matrix) {
   return matrix.flat().reduce((sum, number) => sum + number, 0);
}
