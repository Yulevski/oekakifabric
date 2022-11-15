const canvas = new fabric.Canvas("canvas");

document.getElementById("draw").addEventListener("click", function () {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width=5;
    canvas.freeDrawingBrush.color="black";
    canvas.isDrawingMode = true;
});