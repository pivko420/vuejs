<?php

namespace App\Presenters;

use Nette;


final class HomepagePresenter extends Nette\Application\UI\Presenter
{
    /** @var \WebLoader\Nette\LoaderFactory @inject */
    public $webLoader;

    /** @return CssLoader */
    protected function createComponentCss()
    {
        return $this->webLoader->createCssLoader('default');
    }

    /** @return JavaScriptLoader */
    protected function createComponentJs()
    {
        return $this->webLoader->createJavaScriptLoader('default');
    }
}
