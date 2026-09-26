function formatDate(date) {
    return new Date(date).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}