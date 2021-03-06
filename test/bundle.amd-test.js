/* eslint-env mocha */
/* global define */

define(function (require) {
  // These are smoke tests to make sure the bundles look like they are working
  // correctly.

  const chai = require('chai')
  const graphlib = require('graphlib')
  const graphlibCore = require('graphlib.core')
  const expect = chai.expect

  describe('core bundle', function () {
    it('exports graphlib', function () {
      expect(graphlibCore).to.be.an('object')
      expect(graphlibCore.Graph).to.be.a('function')
      expect(graphlibCore.json).to.be.a('object')
      expect(graphlibCore.alg).to.be.a('object')
    })

    it('can do simple graph operations', function () {
      var g = new graphlibCore.Graph()
      g.setNode('a')
      g.setNode('b')
      g.setEdge('a', 'b')
      expect(g.hasNode('a')).to.equal(true)
      expect(g.hasNode('b')).to.equal(true)
      expect(g.hasEdge('a', 'b')).to.equal(true)
    })

    it('can serialize to json and back', function () {
      var g = new graphlibCore.Graph()
      g.setNode('a')
      g.setNode('b')
      g.setEdge('a', 'b')

      var json = graphlibCore.json.write(g)
      var g2 = graphlibCore.json.read(json)
      expect(g2.hasNode('a')).to.equal(true)
      expect(g2.hasNode('b')).to.equal(true)
      expect(g2.hasEdge('a', 'b')).to.equal(true)
    })
  })

  describe('bundle', function () {
    it('exports graphlib', function () {
      expect(graphlib).to.be.an('object')
      expect(graphlib.Graph).to.be.a('function')
      expect(graphlib.json).to.be.a('object')
      expect(graphlib.alg).to.be.a('object')
    })

    it('can do simple graph operations', function () {
      var g = new graphlib.Graph()
      g.setNode('a')
      g.setNode('b')
      g.setEdge('a', 'b')
      expect(g.hasNode('a')).to.equal(true)
      expect(g.hasNode('b')).to.equal(true)
      expect(g.hasEdge('a', 'b')).to.equal(true)
    })

    it('can serialize to json and back', function () {
      var g = new graphlib.Graph()
      g.setNode('a')
      g.setNode('b')
      g.setEdge('a', 'b')

      var json = graphlib.json.write(g)
      var g2 = graphlib.json.read(json)
      expect(g2.hasNode('a')).to.equal(true)
      expect(g2.hasNode('b')).to.equal(true)
      expect(g2.hasEdge('a', 'b')).to.equal(true)
    })
  })
})
