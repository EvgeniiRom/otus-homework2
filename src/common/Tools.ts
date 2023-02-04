export interface Field {
    data: number[][],
    width: number,
    height: number,
    generation: number
}

export const generateFieldData = (width: number, height: number): number[][] => {
    const result = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(0);
        }
        result.push(row);
    }
    return result;
};

export const getEnvironment = (field: Field): number[][] => {
    const { width, height, data } = field;
    const result = generateFieldData(width, height);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (data[i][j] > 0) {
                for (let si = -1; si <= 1; si++) {
                    for (let sj = -1; sj <= 1; sj++) {
                        if (si !== 0 || sj !== 0) {
                            const row = (i + si + height) % height;
                            const cell = (j + sj + width) % width;
                            result[row][cell]++;
                        }
                    }
                }
            }
        }
    }
    return result;
};

export const generateNextGeneration = (field: Field): Field => {
    const { width, height, data, generation } = field;
    const environment = getEnvironment(field);
    const result = generateFieldData(width, height);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const cellState = data[i][j];
            const cellEnv = environment[i][j];
            if (cellState === 0 && cellEnv === 3) {
                result[i][j] = 1;
            }
            if (cellState > 0 && cellEnv >= 2 && cellEnv <= 3) {
                result[i][j] = 2;
            }
        }
    }
    return { ...field, data: result, generation: generation + 1 };
};

export const generateField = (width: number, height: number): Field => {
    return { data: generateFieldData(width, height), width: width, height: height, generation: 0 };
};

export const equalMatrix = (m1: number[][], m2: number[][]): boolean => {
    if (m1.length !== m2.length) return false;
    for (let i = 0; i < m1.length; i++) {
        const row1 = m1[i];
        const row2 = m2[i];
        if (row1.length !== row2.length) return false;
        for (let j = 0; j < row1.length; j++) {
            if (row1[j] !== row2[j]) return false;
        }
    }
    return true;
}