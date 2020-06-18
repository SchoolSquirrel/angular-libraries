import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
})
export class FilterPipe implements PipeTransform {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public transform(array: any[], key: string, value: any, singleResult = true): any {
        const founds = array.filter((e) => e[key] == value);
        if (!(founds && founds[0])) {
            return singleResult ? {} : [];
        }
        return singleResult ? founds[0] : founds;
    }
}
