<?php

namespace Codinglabs\Gooey;

enum ToastType: string
{
    case Default = 'default';
    case Info = 'info';
    case Success = 'success';
    case Warning = 'warning';
    case Error = 'error';
}
