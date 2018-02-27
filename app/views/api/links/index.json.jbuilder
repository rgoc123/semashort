@links.each do |link|
  json.set! link.id do
    json.id link.id
    json.long_link link.long_link
    json.short_link link.short_link
    json.visits link.visits
  end
end
