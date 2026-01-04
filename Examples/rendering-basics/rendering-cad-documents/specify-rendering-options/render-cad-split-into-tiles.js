import { Viewer, HtmlViewOptions, ViewInfoOptions, Tile } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('HousePlan.dwg')

const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)

// Get the width and height of the CAD drawing.
const width = viewInfo.getPages().get(0).getWidth()
const height = viewInfo.getPages().get(0).getHeight()

// Calculate the width and height of each tile.
let tileWidth = Math.floor(width / 2)
let tileHeight = Math.floor(height / 2)

let pointX = 0
let pointY = 0

// Split the drawing into tiles and convert them to HTML.
// {0} is replaced with the tile number in the output file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-cad-split-into-tiles/dwg-to-html-page_{0}.html')

let tile = new Tile(pointX, pointY, tileWidth, tileHeight)
viewOptions.getCadOptions().getTiles().add(tile)

pointX += tileWidth
tile = new Tile(pointX, pointY, tileWidth, tileHeight)
viewOptions.getCadOptions().getTiles().add(tile)

pointX = 0
pointY += tileHeight
tile = new Tile(pointX, pointY, tileWidth, tileHeight)
viewOptions.getCadOptions().getTiles().add(tile)

pointX += tileWidth
tile = new Tile(pointX, pointY, tileWidth, tileHeight)
viewOptions.getCadOptions().getTiles().add(tile)

viewer.view(viewOptions)

// Exit with a success code
process.exit(0)