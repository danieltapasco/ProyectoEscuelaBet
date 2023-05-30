// Imports

export class ServicioPrueba {
    
    public constructor(){ }

    public service1(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            console.log("Provando servicios");
        });
    }
    
}