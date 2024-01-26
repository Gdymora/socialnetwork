<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class LinkPreview
{
    /* 
    Цей клас LinkPreview відправляє HTTP-запит до заданого URL, парсить HTML-відповідь, витягає метадані Open Graph (og: теги), і повертає їх.
    */
    public function getMetaData($url)
    {
        // Відправка запиту до URL
        $response = Http::get($url);
        $html = $response->body();

        // Парсинг HTML
        $crawler = new Crawler($html);
        $metaTags = $crawler->filter('meta')->each(function (Crawler $node) {
            return [
                'name' => $node->attr('name'),
                'property' => $node->attr('property'),
                'content' => $node->attr('content')
            ];
        });

        // Обробка і повернення метаданих
        return $this->processMetaTags($metaTags);
    }

    protected function processMetaTags($metaTags)
    {
        $data = [];
        foreach ($metaTags as $tag) {
            if (!empty($tag['property']) && str_starts_with($tag['property'], 'og:')) {
                $key = str_replace('og:', '', $tag['property']);
                $data[$key] = $tag['content'];
            }
        }
        return $data;
    }
}
