const imageIds = [
    3257811,
    2499282,
    3643714,
    2071882,
    991831,
    1521306,
    1687831,
    977933,
    4587959
]


for (const imageId of imageIds) {
    const image = document.createElement("img")
    image.alt = "Random cat image"
    image.width = 250
    image.height = 350
    image.src = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    document.body.appendChild(image)
}