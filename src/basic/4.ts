function showMessage(message: string): void {
    console.log(message);
}

function calc(num1: number, num2: number): number {
    return num1 + num2;
}

function customError(): never {
    throw new Error('Error');
}

showMessage('Calculator');
console.log(`Calculation result: ${calc(5, 10)}`);
try {
    customError();
} catch (error) {
    console.error('Caught an error:', error);
}