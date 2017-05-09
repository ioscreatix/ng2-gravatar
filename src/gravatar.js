"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var md5 = require('md5');
var Gravatar = (function () {
    function Gravatar(elementRef) {
        this.elementRef = elementRef;
        this.size = 16;
        this.fallback = 'mm';
    }
    Gravatar.prototype.requestGravatar = function () {
        console.log('Requesting Gravatar: ', this.email, md5(this.email));
        this.elementRef.nativeElement.src = "//www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size + "&d=" + this.fallback;
    };
    Gravatar.prototype.ngOnInit = function () {
        this.requestGravatar();
    };
    Gravatar.prototype.ngOnChanges = function (changes) {
        this.requestGravatar();
    };
    return Gravatar;
}());
__decorate([
    core_1.Input('email'),
    __metadata("design:type", String)
], Gravatar.prototype, "email", void 0);
__decorate([
    core_1.Input('size'),
    __metadata("design:type", Number)
], Gravatar.prototype, "size", void 0);
__decorate([
    core_1.Input('fallback'),
    __metadata("design:type", String)
], Gravatar.prototype, "fallback", void 0);
Gravatar = __decorate([
    core_1.Directive({
        selector: '[gravatar]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Gravatar);
exports.Gravatar = Gravatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmF2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXFGO0FBQ3JGLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUt6QjtJQUtFLGtCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSDNCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQVcsSUFBSSxDQUFDO0lBRUUsQ0FBQztJQUU5QyxrQ0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsK0JBQTZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQU0sSUFBSSxDQUFDLElBQUksV0FBTSxJQUFJLENBQUMsUUFBVSxDQUFDO0lBQ3ZILENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQWxCaUI7SUFBZixZQUFLLENBQUMsT0FBTyxDQUFDOzt1Q0FBZTtBQUNmO0lBQWQsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7c0NBQW1CO0FBQ2Q7SUFBbEIsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7MENBQXlCO0FBSDdDO0lBSEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7cUNBTWdDLGlCQUFVO1lBYzNDO0FBbkJZLG1CQUFBLFFBQVEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBtZDUgPSByZXF1aXJlKCdtZDUnKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dyYXZhdGFyXSdcbn0pXG5leHBvcnQgY2xhc3MgR3JhdmF0YXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2VtYWlsJykgZW1haWw6IHN0cmluZztcbiAgQElucHV0KCdzaXplJykgc2l6ZTogbnVtYmVyID0gMTY7XG4gIEBJbnB1dCgnZmFsbGJhY2snKSBmYWxsYmFjazogc3RyaW5nID0gJ21tJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgcmVxdWVzdEdyYXZhdGFyKCkge1xuICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0aW5nIEdyYXZhdGFyOiAnLCB0aGlzLmVtYWlsLCBtZDUodGhpcy5lbWFpbCkpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IGAvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyR7bWQ1KHRoaXMuZW1haWwpfT9zPSR7dGhpcy5zaXplfSZkPSR7dGhpcy5mYWxsYmFja31gO1xuICB9XG4gICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXF1ZXN0R3JhdmF0YXIoKTtcbiAgfVxuICAgXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlcXVlc3RHcmF2YXRhcigpO1xuICB9XG59XG4iXX0=
