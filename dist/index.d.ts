// Generated by dts-bundle v0.7.3

export type CallbackFunction = (e?: KeyboardEvent, combo?: string) => boolean;
/**
    * This is useful if you want to have a single entry to combos instead of letting devs create their own combos.
    */
export enum KeyBindings {
        moveUp = "up",
        moveDown = "down",
        moveRight = "right",
        moveLeft = "left",
        pageUp = "pageup",
        pageDown = "pagedown",
        home = "home",
        end = "end",
        ctrlHome = "ctrl+home",
        ctrlEnd = "ctrl+end",
}
export default class Mousetrap {
        /**
            * element to attach key events to
            */
        target: HTMLElement | HTMLDocument;
        /**
            * Method to remove all listerners for a target element
            */
        destroy: Function;
        constructor(targetElement: HTMLElement, useCapture?: boolean);
        /**
            * binds an event to mousetrap
            *
            * can be a single key, a combination of keys separated with +,
            * an array of keys, or a sequence of keys separated by spaces
            *
            * be sure to list the modifier keys first to make sure that the
            * correct key ends up getting bound (the last key in the pattern)
            */
        bind(keys: KeyBindings | string | string[], callback: CallbackFunction, action: string): void;
        /**
            * unbinds an event to mousetrap
            *
            * the unbinding sets the callback function of the specified key combo
            * to an empty function and deletes the corresponding key in the
            * _directMap dict.
            *
            * TODO: actually remove this from the _callbacks dictionary instead
            * of binding an empty function
            *
            * the keycombo+action has to be exactly the same as
            * it was defined in the bind method
            */
        unbind(keys: KeyBindings | string | string[], action: string): void;
        /**
            * triggers an event that has already been bound
            */
        trigger(keys: string, action: string): void;
        /**
            * resets the library back to its initial state.  this is useful
            * if you want to clear out the current keyboard shortcuts and bind
            * new ones - for example if you switch to another page
            */
        reset(): void;
        /**
            * should we stop this event before firing off callbacks
            */
        stopCallback(e: KeyboardEvent, element: HTMLElement): boolean;
        /**
            * exposes _handleKey publicly so it can be overwritten by extensions
            */
        handleKey(): void;
        /**
            * allow custom key mappings
            */
        addKeycodes: (object: any) => void;
}
