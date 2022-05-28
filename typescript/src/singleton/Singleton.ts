export default class Singleton {
    private static instance: Singleton;
    private value: string
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor( value: string ) {
        this.value = value
    }

    /**
     * We'll use the "value" property to test the implementation
     */
    get instanceValue() {
        return this.value
    }

    /**
     * The getInstance method ensures that the same instance is returned every time
     * the method is called.
     */
    public static getInstance( value: string ): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton( value );
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}