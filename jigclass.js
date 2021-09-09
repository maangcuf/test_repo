class Site extends Jig {
    init(){
        this.label = [0,0,0]
        this.content = [0,0,0]
    }
    setTitle(title){
        this.title = title
    }
    setSubtitle(subtitle){
        this.subtitle = subtitle
    }
    setSectionLabel(i,label){
        this.label[i-1] = label
    }
    setSectionContent(i,content){
        this.content[i-1] = content
    }
    setHeroImg(heroimgurl){
        this.heroimgurl = heroimgurl
    }
    setSquareImg(squareimgurl){
        this.squareimgurl = squareimgurl
    }
    setEmbed(html){
        this.embed = html
    }
    useTipWidget(boolean){
        this.tipwidget = boolean
    }
    setTipTo(tipto){
        this.tipto = tipto
    }
    setCSS(cssjig){
        this.css = cssjig
    }
  }
  Site.metadata={ emoji: '🏕' }

  class CSS extends Jig {
    init(url){
        this.url = url
    }
  }
  CSS.metadata = {emoji:'👔'}
  

  //Site location 30faeff157ba95c27e65feb1b0f7b849713ae732c3326935efdcad6ec590d44b_o1
  //CSS location 75210f54ee4c219cb381d0adc639c53e2cd206d93d28d3be49647904c4570ec2_o1