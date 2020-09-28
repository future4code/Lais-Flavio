describe("Testing balance greater than value", () => {

    test("Testing balance greater than value to equal", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 50)
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })
    
    
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})
